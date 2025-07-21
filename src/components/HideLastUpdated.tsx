'use client'

import type { FC, ReactNode } from 'react'

export const HideLastUpdated: FC<{
  date?: Date
  children?: ReactNode
  locale?: string
}> = ({ date, children = 'Last updated on', locale = 'en' }) => {

  return (
    <>
    </>
  )
}