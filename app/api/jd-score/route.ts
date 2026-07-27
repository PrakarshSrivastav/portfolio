export async function POST(req: Request) {
  const { jd } = await req.json();
  const info = await (await fetch(new URL('/data/info.md', req.url))).text();

  const res = await fetch(`${process.env.OMNIROUTE_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OMNIROUTE_KEY}` },
    body: JSON.stringify({
      model: 'deepseek-v4-flash-free',
      messages: [
        { role: 'system', content: `Score how well this candidate matches a job description. Candidate info:\n${info}` },
        { role: 'user', content: jd }
      ]
    })
  });
  const data = await res.json();
  return Response.json({ result: data.choices[0].message.content });
}