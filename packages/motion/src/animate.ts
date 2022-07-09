import {
  ElementOrSelector,
  animate as animateDom,
  AnimationOptionsWithOverrides,
  MotionKeyframesDefinition,
  withControls,
} from "@motionone/dom"
import { Animation } from "@motionone/animation"
import {
  AnimationControls,
  AnimationDriver,
  AnimationOptions,
  ProgressFunction,
} from "@motionone/types"

export function animateProgress(
  target: ProgressFunction,
  options: AnimationOptions & { driver?: AnimationDriver } = {}
) {
  return withControls(
    [
      () => {
        const animation = new Animation(target, [0, 1], options)
        animation.finished.catch(() => {})
        return animation
      },
    ],
    options.duration,
    options.driver
  )
}

export function animate(
  elements: ElementOrSelector,
  keyframes: MotionKeyframesDefinition,
  options?: AnimationOptionsWithOverrides
): AnimationControls
export function animate(
  target: ProgressFunction,
  options?: AnimationOptions
): AnimationControls
export function animate(
  target: ProgressFunction | ElementOrSelector,
  keyframesOrOptions?: MotionKeyframesDefinition | AnimationOptions,
  options?: AnimationOptionsWithOverrides
): AnimationControls {
  const factory: any =
    typeof target === "function" ? animateProgress : animateDom

  return factory(target, keyframesOrOptions, options)
}
