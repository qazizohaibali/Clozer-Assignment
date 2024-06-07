export interface CustomTheme {
    image: string;
    visibility: string;
  }
  
  export interface DisplayName {
    image: string;
    text: string;
    visibility: string;
  }
  
  export interface MobileTheme {
    hero: string;
    footer: string;
  }
  
  export interface UserProfile {
    uid: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    links: null | any;
    membership_nft: null | any;
    is_launch_idol: boolean;
    theme: string;
    custom_theme: CustomTheme;
    display_name: DisplayName;
    mobile_theme: MobileTheme;
  }