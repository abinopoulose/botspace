export const postTypeOptions = [
  {
    label: 'a specific post or reel',
    value: 'a specific post or reel',
    isPro: false
  },
  {
    label: 'any post or reel',
    value: 'any post or reel',
    isPro: true
  },
  {
    label: 'next post or reel',
    value: 'next post or reel',
    isPro: true
  }
] as const;

export const automationDMSteps = ['Post', 'Comment', 'DM'] as const;

export const commentTypeOptions = [
  {
    label: 'a specific word or words',
    value: 'a specific word or words'
  },
  {
    label: 'any word',
    value: 'any word'
  }
] as const;

export const exampleKeywords = ['Price', 'Link', 'Shop'];

export const otherAutomationOptions = [
  {
    label: 'Reply under the post so people feel seen and special',
    value: 'reply-under-post',
    isPro: false
  },
  {
    label: 'Follow up to re-engage and build trust',
    value: 'follow-up-reengage',
    isPro: true
  },
  {
    label: 'Automatically ask for a follow to build your audience',
    value: 'ask-for-follow',
    isPro: true
  },
  {
    label: 'Ask for emails in DMs to keep in touch beyond social',
    value: 'ask-email-in-dms',
    isPro: true
  }
];
