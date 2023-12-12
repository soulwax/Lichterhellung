import { createCanvas } from "canvas";
import * as deepl from "deepl-node";
export const GLOBAL_CANVAS = createCanvas(1200, 400);
export const CHARTJS_NODE_CANVAS = GLOBAL_CANVAS.getContext("2d");
export const TRANSLATOR = new deepl.Translator(process.env.DEEPL!);

export const HELPER_ROLES = process.env.HELPER_ROLES?.split(",") || [];
export const STATUS_ROLES = process.env.STATUS_ROLES?.split(",") || [];
export const MEMBER_ROLES = process.env.MEMBER_ROLES?.split(",") || [];

export const HELPER_RANKING = [
  { name: HELPER_ROLES[0], points: 25 },
  { name: HELPER_ROLES[1], points: 50 },
];

export const EVERYONE = "@everyone";
export const VERIFIED = STATUS_ROLES[0];
export const VOICE_ONLY = STATUS_ROLES[1];
export const JAIL = STATUS_ROLES[2];
export const UNVERIFIED = STATUS_ROLES[3];

export const GENERAL_CHANNEL = process.env.GENERAL_CHANNEL!;
export const VERIFY_CHANNEL = process.env.VERIFY_CHANNEL!;
export const BOT_CHANNEL = process.env.BOT_CHANNEL!;
export const VOICE_EVENT_CHANNEL = process.env.VOICE_EVENT_CHANNEL!;
export const JOIN_EVENTS_CHANNEL = process.env.JOIN_EVENTS_CHANNEL!;
export const MEMBERS_COUNT_CHANNEL = process.env.MEMBERS_COUNT_CHANNEL!;

export const MEMBERS_TEMPLATE = "members count";
export const STATS_TEMPLATE = "user stats";
export const TOP_STATS_TEMPLATE = "top stats";
export const VERIFY_TEMPLATE = "verify yourself";

export const RED_COLOR = parseInt("#FF0000") as number | undefined;

export const BOT_ICON = process.env.BOT_ICON!;
