import {FC, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  children?: any;
  ogImageUrl?: string;
}

export interface Hero {
  imageSrc: any;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}


export interface About {
  profileImageSrc?: any;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}


export interface Stat {
  title: string;
  value: number;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}


export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content?: JSX.Element;
}

export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
