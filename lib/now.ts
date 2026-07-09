export interface NowLearningItem {
  label: string
  detail: string
  since: string
}

export const nowLearning: NowLearningItem[] = [
  {
    label: "API Design",
    detail: "Deep-diving into REST best practices, idempotency, and versioning strategies",
    since: "July 2026",
  },
]
