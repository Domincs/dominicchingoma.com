import {clsx} from 'clsx'
import {motion, useReducedMotion, type Variant} from 'framer-motion'
import {ArrowIcon} from '@components/ui/'
import { ElementState, useElementState } from '../../hooks/use-element-state'
import { Text } from '@components/ui'
import Link, { LinkProps } from 'next/link'

type ArrowIconProps = React.ComponentProps<typeof ArrowIcon>

const arrowVariants: Record<
  ArrowIconProps['direction'],
  Record<ElementState, Variant>
> = {
  down: {
    initial: {y: 0},
    hover: {y: 4},
    focus: {
      y: [0, 4, 0],
      transition: {repeat: Infinity},
    },
    active: {y: 12},
  },
  up: {
    initial: {y: 0},
    hover: {y: -4},
    focus: {
      y: [0, -4, 0],
      transition: {repeat: Infinity},
    },
    active: {y: -12},
  },
  left: {
    initial: {x: 0},
    hover: {x: -4},
    focus: {
      x: [0, -4, 0],
      transition: {repeat: Infinity},
    },
    active: {x: -12},
  },
  right: {
    initial: {x: 0},
    hover: {x: 4},
    focus: {
      x: [0, 4, 0],
      transition: {repeat: Infinity},
    },
    active: {x: 12},
  },
  'top-right': {
    initial: {x: 0, y: 0},
    hover: {x: 4, y: -4},
    focus: {
      x: [0, 4, 0],
      y: [0, -4, 0],
      transition: {repeat: Infinity},
    },
    active: {x: 12, y: -12},
  },
}

type ArrowButtonBaseProps = {
  direction?: ArrowIconProps['direction']
  children?: React.ReactNode | React.ReactNode[]
  className?: string
  textSize?: 'small' | 'medium'
  disabled?: boolean
}

type ArrowLinkProps = {
  direction?: ArrowIconProps['direction']
} & ({href?: string }) &
  ArrowButtonBaseProps & {prefetch?: 'intent' | 'render' | 'none'}

type ArrowButtonProps = {
  onClick?: JSX.IntrinsicElements['button']['onClick']
  type?: JSX.IntrinsicElements['button']['type']
} & ArrowButtonBaseProps

// whileFocus takes precedence over whileTap, so while we can't move the arrow
// on focus (or on tap), we can still color and animate the circle.
// See: https://github.com/framer/motion/issues/1221
function getBaseProps({textSize, className}: ArrowButtonBaseProps) {
  return {
    className: clsx(
      'text-white dark:text-gray-100 inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition',
      {
        'text-xl': textSize === 'medium',
        'text-lg': textSize === 'small',
      },
      className,
    ),
  }
}

function ArrowButtonContent({
  children,
  direction = 'right',
}: Pick<ArrowButtonBaseProps, 'children' | 'direction'>) {
  const circumference = 28 * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {children &&
      (direction === 'right' ||
        direction === 'up' ||
        direction === 'top-right') ? (
        <span className="mr-8 text-xl font-medium text-slate-800 dark:text-slate-200">{children}</span>
      ) : null}

      <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1 text-slate-800 dark:text-slate-200">
        <div className="absolute text-slate-200 dark:text-slate-500">
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            />

            <motion.circle
              className="text-slate-800 dark:text-slate-200"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              style={{strokeDasharray, rotate: -90}}
              variants={{
                initial: {strokeDashoffset: circumference},
                hover: {strokeDashoffset: 0},
                focus: {strokeDashoffset: 0},
                active: {strokeDashoffset: 0},
              }}
              transition={{
                damping: 0,
                ...(shouldReduceMotion ? {duration: 0} : null),
              }}
            />
          </svg>
        </div>

        <motion.span
          transition={shouldReduceMotion ? {duration: 0} : {}}
          variants={shouldReduceMotion ? {} : arrowVariants[direction]}
        >
          <ArrowIcon direction={direction} />
        </motion.span>
      </div>

      {children && (direction === 'left' || direction === 'down') ? (
        <span className="ml-8 text-xl font-medium">{children}</span>
      ) : null}
    </>
  )
}

export const ArrowButton = ({onClick, type, ...props}: ArrowButtonProps) => {
  const [ref, state] = useElementState()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.button
      onClick={onClick}
      type={type}
      {...getBaseProps(props)}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? {duration: 0} : {}}
    >
      <ArrowButtonContent {...props} />
    </motion.button>
  )
}



function ArrowLink({ href, ...props}: ArrowLinkProps) {
  const [ref, state] = useElementState()
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      {...getBaseProps(props)}
      ref={ref}
      animate={state}
      transition={shouldReduceMotion ? {duration: 0} : {}}
    >
      <ArrowButtonContent {...props} />
    </motion.a>
  )
}


// function BackLink({
//   href,
//   className,
//   children,
// }: {href: LinkProps['href']} & Pick<ArrowLinkProps, 'className' | 'children'>) {
//   const [ref, state] = useElementState()
//   const shouldReduceMotion = useReducedMotion()
//   return (
//     <MotionLink
//       href={href}
//       ref={ref}
//       animate={state}
//       transition={shouldReduceMotion ? {duration: 0} : {}}
//     >
//       <motion.span
//         variants={shouldReduceMotion ? {} : arrowVariants.left}
//         transition={shouldReduceMotion ? {duration: 0} : {}}
//       >
//         <ArrowIcon direction="left" />
//       </motion.span>
//       <Text as="span">{children}</Text>
//     </MotionLink>
//   )
// }

export { ArrowLink }