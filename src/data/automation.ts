import { AutomationItem } from "@/types";

export const automationItems: AutomationItem[] = [
  {
    id: "auto-001",
    number: "AUTOMATION 001",
    title: "Ticket Availability Bot",
    purpose: "Autonomous monitoring of high-demand ticketing platforms with instant Telegram alerts upon inventory release.",
    description:
      "A resilient Node.js background daemon that polls designated endpoints at adaptive intervals, parses availability states, and dispatches rich Telegram notifications the moment ticket allocations open up.",
    technology: ["Node.js", "Telegram Bot API", "Polling Engine", "Webhook Alerts"],
    triggerType: "Scheduled Polling (Adaptive Cron)",
    status: "AUTOMATED",
  },
  {
    id: "auto-002",
    number: "AUTOMATION 002",
    title: "Booking & Inquiry Workflow Automation",
    purpose: "Zero-latency synchronization connecting customer booking submissions with calendar reservation pipelines.",
    description:
      "Eliminates manual email back-and-forth by validating inbound booking forms, generating immediate calendar hold invitations, and notifying stakeholders across multiple notification webhooks.",
    technology: ["REST APIs", "Node.js", "Webhook Integration", "Calendar Sync"],
    triggerType: "Event-Driven Webhook",
    status: "ACTIVE",
  },
  {
    id: "auto-003",
    number: "AUTOMATION 003",
    title: "Multi-Platform Inventory Sync Daemon",
    purpose: "Synchronizing product stock levels across multiple storefront channels to prevent over-selling.",
    description:
      "An asynchronous event consumer that captures inventory state mutations from primary databases and broadcasts delta updates to secondary channels with idempotency guards and retry queues.",
    technology: ["Node.js", "REST Endpoints", "Async Retry Queue", "Database Hooks"],
    triggerType: "Database Mutation Hook",
    status: "AUTOMATED",
  },
];
