import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"
import Image from "next/image"

export default function VedAIProject() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-screen-xl mx-auto flex h-14 items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">PS</span>
          </Link>
        </div>
      </header>

      <main className="container max-w-screen-xl mx-auto px-4 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">VedAI – AI Chatbot on Bhagavad Gita</h1>
            <p className="text-xl text-muted-foreground">
              An AI-powered chatbot that provides insights and teachings from the Bhagavad Gita using advanced RAG
              technology
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
            <Image src="/ai-chatbot-interface-with-ancient-indian-spiritual.jpg" alt="VedAI Project" fill className="object-cover" />
          </div>

          <div className="flex gap-4">
            <Link href="https://github.com/PrakarshSrivastav/VedAI" target="_blank">
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              VedAI is an innovative AI-powered chatbot that brings ancient wisdom from the Bhagavad Gita to modern
              users through conversational AI. Built using Python and FastAPI, it leverages Retrieval-Augmented
              Generation (RAG) technology with a FAISS vector database to provide accurate and contextually relevant
              responses based on the sacred text.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>RAG Model Integration:</strong> Utilizes Retrieval-Augmented Generation with FAISS vector
                database for efficient and accurate retrieval of teachings from the Bhagavad Gita
              </li>
              <li>
                <strong>Persistent Chat History:</strong> Implements user-specific chat history storage to maintain
                context across sessions and provide personalized recommendations
              </li>
              <li>
                <strong>Lightweight Deployment:</strong> Optimized for efficient deployment with minimal resource
                requirements while maintaining high performance
              </li>
              <li>
                <strong>Advanced NLP:</strong> Seamless integration of machine learning and natural language processing
                for natural conversations
              </li>
            </ul>

            <h2>Technical Implementation</h2>
            <h3>Backend Architecture</h3>
            <ul>
              <li>Built with Python and FastAPI for high-performance API endpoints</li>
              <li>Integrated FAISS (Facebook AI Similarity Search) for efficient vector similarity search</li>
              <li>Implemented RAG pipeline for accurate context retrieval and response generation</li>
              <li>Designed persistent storage system for user chat histories</li>
            </ul>

            <h3>Machine Learning & NLP</h3>
            <ul>
              <li>Utilized embedding models for semantic understanding of queries</li>
              <li>Implemented vector indexing for fast retrieval of relevant passages</li>
              <li>Applied prompt engineering for contextually appropriate responses</li>
              <li>Optimized model inference for production deployment</li>
            </ul>

            <h2>Technologies Used</h2>
            <div className="flex flex-wrap gap-2 not-prose">
              {["Python", "FastAPI", "RAG", "FAISS", "NLP", "Machine Learning", "Vector Database", "Embeddings"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium ring-1 ring-inset ring-primary/20"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <h2>Project Timeline</h2>
            <p>July 2025 – September 2025</p>

            <h2>Challenges & Solutions</h2>
            <ul>
              <li>
                <strong>Semantic Understanding:</strong> Implemented advanced embedding techniques to capture the deep
                philosophical meanings in the text
              </li>
              <li>
                <strong>Context Preservation:</strong> Designed an efficient chat history system that maintains
                conversation flow while keeping the system lightweight
              </li>
              <li>
                <strong>Response Accuracy:</strong> Fine-tuned the RAG pipeline to ensure responses are faithful to the
                original teachings
              </li>
            </ul>

            <h2>Future Enhancements</h2>
            <ul>
              <li>Multilingual support for broader accessibility</li>
              <li>Voice interaction capabilities</li>
              <li>Integration with other spiritual texts</li>
              <li>Advanced personalization based on user preferences and history</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
