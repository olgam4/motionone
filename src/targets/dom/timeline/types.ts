import {
  AcceptedElements,
  AnimationOptionsWithOverrides,
  Easing,
  MotionKeyframes,
} from "../types"

export type TimelineSegment =
  | [AcceptedElements, MotionKeyframes]
  | [AcceptedElements, MotionKeyframes, AnimationOptionsWithOverrides]
  | [AcceptedElements, MotionKeyframes, AnimationOptionsWithOverrides, NextTime]

export type TimelineDefinition = TimelineSegment[]

export type NextTime = number | `+${number}` | `-${number}` | `${string}`

export interface ElementSequence {
  [key: string]: ValueSequence
}

export type AbsoluteKeyframe = {
  value: string | number | null
  at: number
  easing?: Easing
}

export type ValueSequence = AbsoluteKeyframe[]
