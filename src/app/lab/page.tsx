import { AudioPlayer } from '~/components/lab/audio-player'
import { FluidButton } from '~/components/lab/fluid-button'
import { InteractiveInput } from '~/components/lab/interactive-input'
import { LineGrid } from '~/components/lab/line-grid'
import { PowerWidget } from '~/components/lab/power-widget'
import { ReactionsMenu } from '~/components/lab/reactions-menu'
import { Component, type ComponentProps } from '~/components/shared/component'
import { Header } from '~/components/shared/header'

const components = [
  {
    title: 'Mini Map',
    description:
      "I don’t even know what this is, but I've seen a couple of similar implementations and was starting to feel left out.",
    tools: ['Tailwind', 'React', 'Framer Motion'],
    children: <LineGrid />,
    beta: true,
    filename: 'line-grid.tsx',
  },
  {
    title: 'Reaction menu',
    description:
      'The reaction menu from iMessage. Experimenting with filters for a nice gooey effect, and still refining. Press and hold to open the menu.',
    tools: ['Tailwind', 'React', 'Framer Motion'],
    children: <ReactionsMenu />,
    filename: 'audio-player.tsx',
  },
  {
    title: 'Interactive input',
    description:
      'Experimenting with ways to provide users with context and guidance for an input, giving them a visual cue of what to do next and how to interact with your tool.',
    tools: ['Tailwind', 'React', 'Framer Motion'],
    children: <InteractiveInput />,
    filename: 'interactive-input.tsx',
  },
  {
    title: 'Player controls',
    description:
      "Recreating the player controls from Apple's control center; using the animation gives users a feeling of the action they're taking. Work in progress; innovating on the animations, and using this in the context of a full music player.",
    tools: ['Tailwind', 'React', 'Framer Motion'],
    children: <AudioPlayer />,
    filename: 'audio-player.tsx',
  },
  {
    title: 'Power widget',
    description:
      "Innovating on the MacOS desktop power widget. I don't love the way their animations look, so I'm experimenting with a more fluid and dynamic approach. Right click to change the size.",
    tools: ['Tailwind', 'React', 'Framer Motion', 'Radix'],
    children: <PowerWidget />,
    filename: 'power-widget.tsx',
  },
  {
    title: 'Fluid button',
    description:
      'An experiment fluidly transitioning between two actions. When the button is clicked, the letters that are shared between the two words persist, animating between states.',
    tools: ['Tailwind', 'React', 'Framer Motion'],
    children: <FluidButton />,
    filename: 'fluid-button.tsx',
  },
] satisfies Array<ComponentProps>

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-16 flex flex-col justify-center gap-8 space-y-12">
        {components.map(
          ({ title, description, tools, children, filename, beta }) => (
            <Component
              key={title}
              title={title}
              description={description}
              tools={tools}
              filename={filename}
              beta={beta}
            >
              {children}
            </Component>
          ),
        )}
      </div>
    </>
  )
}
