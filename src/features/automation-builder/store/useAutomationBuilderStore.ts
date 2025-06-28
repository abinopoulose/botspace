import { create } from 'zustand';
import type { automationDMSteps, commentTypeOptions, postTypeOptions } from '../config';

export type PostType = (typeof postTypeOptions)[number]['value'];

export type ActiveStep = (typeof automationDMSteps)[number];

export type CommentType = (typeof commentTypeOptions)[number]['value'];

interface AutomationState {
  activeStep: ActiveStep;
  postType: PostType;
  postId?: string;
  commentType: CommentType;
  keywords: string;
  openingDMEnabled: boolean;
  openingDMText: string;
  linkDMText: string;
  sendLinkButtonText: string;
  updateField: <T extends keyof AutomationState>(key: T, value: AutomationState[T]) => void;
}

export const useAutomationStore = create<AutomationState>((set) => ({
  postType: 'a specific post or reel',
  keywords: '',
  commentType: 'a specific word or words',
  openingDMEnabled: true,
  openingDMText: '',
  linkDMText: '',
  activeStep: 'Post',
  sendLinkButtonText: '',
  updateField: (key, value) => set({ [key]: value })
}));
