/**
 * Sample type definitions from YouthMentor AI (non-sensitive excerpt).
 * Full implementation is in the private deployment repo.
 */

export type Mood =
  | "happy"
  | "calm"
  | "stressed"
  | "anxious"
  | "sad"
  | "angry"
  | "tired"
  | "confused";

export type SafetyLevel = "normal" | "watch" | "high_risk";

export type ReflectionAnswers = {
  whatHappened: string;
  whatFelt: string;
  worseThought: string;
  anotherView: string;
  smallAction: string;
  trustedPerson: string;
};

export type MentorResponse = {
  emotionalValidation: string;
  reflectionSummary: string;
  reframedThought: string;
  smallActionSteps: string[];
  encouragement: string;
  whenToSeekHelp: string;
  safetyLevel: SafetyLevel;
  followUpPrompt: string;
};
