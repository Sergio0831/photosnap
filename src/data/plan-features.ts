import { PlanFeatures } from "../types/PlanFeatures.types";

export const planFeatures: PlanFeatures[] = [
  {
    plan: "basic",
    features: ["unlimited story posting", "unlimited photo upload"]
  },
  {
    plan: "pro",
    features: [
      "unlimited story posting",
      "unlimited photo upload",
      "embedding custom content",
      "customize metadata"
    ]
  },
  {
    plan: "business",
    features: [
      "unlimited story posting",
      "unlimited photo upload",
      "embedding custom content",
      "customize metadata",
      "advanced metrics",
      "photo downloads",
      "search engine indexing",
      "custom analytics"
    ]
  }
];
