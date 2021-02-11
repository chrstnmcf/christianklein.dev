import { useState } from 'react';
import tw, { styled } from 'twin.macro';

type ToggleSize = 'sm' | 'md' | 'lg';

interface ToggleProps {
  active?: boolean;
  size?: ToggleSize;
  onClick: (active: boolean) => void;
}

interface ToggleStyleProps {
  active?: boolean;
  size?: ToggleSize;
}

const ToggleButton = tw.span`
  relative inline-flex flex-shrink-0
  cursor-pointer transition-colors ease-in-out duration-200
  border-2 border-transparent rounded-full
  focus:ring-2 focus:ring-gray-400 focus:outline-none focus:ring-opacity-50
`;

const ToggleBackground = styled.span<ToggleStyleProps>(({ size }) => [
  tw`rounded-full flex items-center justify-center text-gray-400 text-xs`,
  tw`w-8 h-4`,
  size === 'sm' && tw`w-6 h-3`,
  size === 'lg' && tw`w-12 h-6`,
]);

const ToggleCircle = styled.span<ToggleStyleProps>(({ active, size }) => [
  tw`bg-white absolute transition ease-in-out duration-200 rounded-full shadow flex items-center justify-center transform`,
  !active && tw`translate-x-0 text-gray-500 text-xs`,
  active && tw`translate-x-full text-gray-900 text-xs`,
  tw`h-3 w-3`,
  size === 'lg' && tw`h-6 w-6`,
  size === 'md' && tw`h-4 w-4`,
]);

export default function Toggle({ active = false, size = 'md', onClick }: ToggleProps) {
  const [activeState, setActiveState] = useState(active);

  const toggled = () => {
    setActiveState(!activeState);

    if (onClick) {
      onClick(!activeState);
    }
  };

  return (
    <>
      <ToggleButton
        css={[activeState ? tw`bg-gray-700` : tw`bg-gray-300`]}
        role="checkbox"
        aria-checked={activeState}
        onClick={toggled}
      >
        <input value={activeState ? 'active' : 'inactive'} type="hidden" />
        <ToggleBackground size={size} />
        <ToggleCircle active={activeState} size={size} aria-hidden="true" />
      </ToggleButton>
    </>
  );
}
