import type { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

// https://carbondesignsystem.com/elements/typography/type-sets/
export type TTextVariant =
  | 'code-01'
  | 'code-02'
  | 'label-01'
  | 'label-02'
  | 'helper-01'
  | 'helper-02'
  | 'legal-01'
  | 'legal-02'
  | 'body-compact-01'
  | 'body-compact-02'
  | 'body-01'
  | 'body-02'
  | 'heading-compact-01'
  | 'heading-compact-02'
  | 'heading-01'
  | 'heading-02'
  | 'heading-03'
  | 'heading-04'
  | 'heading-05'
  | 'heading-06'
  | 'heading-07'
  | 'fluid-heading-03'
  | 'fluid-heading-04'
  | 'fluid-heading-05'
  | 'fluid-heading-06'
  | 'fluid-paragraph-01'
  | 'fluid-quotation-01'
  | 'fluid-quotation-02'
  | 'fluid-display-01'
  | 'fluid-display-02'
  | 'fluid-display-03'
  | 'fluid-display-04'

const variantMap = {
  'code-01':
    'font-mono font-normal text-[0.75rem] leading-[1rem] tracking-wider',
  'code-02':
    'font-mono font-normal text-[0.875rem] leading-[1.125rem] tracking-wider',
  'label-01': 'font-normal text-[0.75rem] leading-[1rem] tracking-wider',
  'label-02': 'font-normal text-[0.875rem] leading-[1.125rem] tracking-wide',
  'helper-01': 'font-normal text-[0.75rem] leading-[1rem] tracking-wider',
  'helper-02': 'font-normal text-[0.875rem] leading-[1.125rem] tracking-wide',
  'legal-01': 'font-normal text-[0.75rem] leading-[1rem] tracking-wider',
  'legal-02': 'font-normal text-[0.875rem] leading-[1.125rem] tracking-wide',
  'body-compact-01':
    'font-normal text-[0.875rem] leading-[1.125rem] tracking-wide',
  'body-compact-02':
    'font-normal text-[1rem] leading-[1.375rem] tracking-normal',
  'body-01': 'font-normal text-[0.875rem] leading-[1.25rem] tracking-wide',
  'body-02': 'font-normal text-[1rem] leading-[1.5rem] tracking-normal',
  'heading-compact-01':
    'font-semibold text-[0.875rem] leading-[1.125rem] tracking-wide',
  'heading-compact-02':
    'font-semibold text-[1rem] leading-[1.375rem] tracking-normal',
  'heading-01': 'font-semibold text-[0.875rem] leading-[1.25rem] tracking-wide',
  'heading-02': 'font-semibold text-[1rem] leading-[1.5rem] tracking-normal',
  'heading-03': 'font-normal text-[1.25rem] leading-[1.75rem] tracking-normal',
  'heading-04': 'font-normal text-[1.75rem] leading-[2.25rem] tracking-normal',
  'heading-05': 'font-normal text-[2rem] leading-[2.5rem] tracking-normal',
  'heading-06': 'font-light text-[2.625rem] leading-[3.125rem] tracking-normal',
  'heading-07': 'font-light text-[3.375rem] leading-[4rem] tracking-normal',
  'fluid-heading-03':
    'font-normal text-[1.25rem] 2xl:text-[1.5rem] leading-[1.75rem] tracking-normal',
  'fluid-heading-04':
    'font-normal text-[1.75rem] xl:text-[2rem] leading-[2.25rem] xl:leading-[2.5rem] tracking-normal',
  'fluid-heading-05':
    'font-normal md:font-light text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[3rem] 2xl:text-[3.75rem] leading-[2.5rem] md:leading-[2.75rem] lg:leading-[3.125rem] xl:leading-[3.5rem] 2xl:leading-[4.375rem] tracking-normal',
  'fluid-heading-06':
    'font-semibold text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[3rem] 2xl:text-[3.75rem] leading-[2.5rem] md:leading-[2.75rem] lg:leading-[3.125rem] xl:leading-[3.5rem] 2xl:leading-[4.375rem] tracking-normal',
  'fluid-paragraph-01':
    'font-light text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] leading-[1.875rem] lg:leading-[2.25rem] 2xl:leading-[2.5rem] tracking-normal',
  'fluid-quotation-01':
    'font-normal xl:font-light text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem] leading-[1.625rem] lg:leading-[1.875rem] xl:leading-[2.25rem] 2xl:leading-[2.5rem] tracking-normal',
  'fluid-quotation-02':
    'font-light text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[3rem] 2xl:text-[3.75rem] leading-[2.5rem] md:leading-[2.75rem] lg:leading-[3.125rem] xl:leading-[3.5rem] 2xl:leading-[4.375rem] tracking-normal',
  'fluid-display-01':
    'font-light text-[2.625rem] lg:text-[3.375rem] xl:text-[3.75rem] 2xl:text-[4.75rem] leading-[3.125rem] lg:leading-[4rem] xl:leading-[4.375rem] 2xl:leading-[5.375rem] tracking-normal',
  'fluid-display-02':
    'font-semibold text-[2.625rem] lg:text-[3.375rem] xl:text-[3.75rem] 2xl:text-[4.75rem] leading-[3.125rem] lg:leading-[4rem] xl:leading-[4.375rem] 2xl:leading-[5.375rem] tracking-normal',
  'fluid-display-03':
    'font-light text-[2.625rem] md:text-[3.375rem] lg:text-[3.75rem] xl:text-[4.75rem] 2xl:text-[5.25rem] leading-[3.125rem] md:leading-[4rem] lg:leading-[4.375rem] xl:leading-[5.375rem] 2xl:leading-[5.875rem] tracking-normal lg:tracking-tight 2xl:tracking-tightest',
  'fluid-display-04':
    'font-light text-[2.625rem] md:text-[4.25rem] lg:text-[5.75rem] xl:text-[7.625rem] 2xl:text-[9.75rem] leading-[3.125rem] md:leading-[4.875rem] lg:leading-[6.375rem] xl:leading-[8.125rem] 2xl:leading-[10.25rem] tracking-normal lg:tracking-tight 2xl:tracking-tightest'
} satisfies {
  [variant in TTextVariant]: string
}

export const dx = (variant: TTextVariant, ...inputs: ClassValue[]) =>
  cn(variantMap[variant], inputs)
