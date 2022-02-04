import { Price } from "../types/Price.types";

export const pricingCards: Price[] = [
  {
    id: "c1",
    title: "basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    popular: false,
    price: [
      {
        plan: "monthly",
        amount: "19.00"
      },
      {
        plan: "year",
        amount: "190.00"
      }
    ]
  },
  {
    id: "c2",
    title: "pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    popular: true,
    price: [
      {
        plan: "monthly",
        amount: "39.00"
      },
      {
        plan: "year",
        amount: "390.00"
      }
    ]
  },
  {
    id: "c3",
    title: "business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    popular: false,
    price: [
      {
        plan: "monthly",
        amount: "99.00"
      },
      {
        plan: "year",
        amount: "990.00"
      }
    ]
  }
];
