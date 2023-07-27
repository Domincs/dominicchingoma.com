import clsx from "clsx";
import { useTheme } from "hooks";
import { MoonIcon, SunIcon } from "../Icons";

const iconTransformOrigin = {transformOrigin: '50% 100px'}

export const DarkModeToggle = ({variant = 'icon'}: {variant?: 'icon' | 'labelled'})  => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'border-secondary hover:border-primary focus:border-primary inline-flex h-10 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none',
        {
          'w-10': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative h-8 w-8">
        <span
          className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}
        >
          <MoonIcon />
          rd
        </span>
        <span
          className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}
        >
          <SunIcon />
          gh
        </span>
      </div>
      <span
        className={clsx('ml-4 text-black dark:text-white', {
          'sr-only': variant === 'icon',
        })}
      >
        {/* <Themed dark="switch to light mode" light="switch to dark mode" /> */}
      </span>
    </button>
  )
}