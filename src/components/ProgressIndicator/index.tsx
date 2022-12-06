import { ProgressIndicatorContainer } from "./styles";

interface ProgressIndicatorProps {
  size: number;
  active: number;
}

export function ProgressIndicator({ size, active }: ProgressIndicatorProps) {
  return (
    <ProgressIndicatorContainer >
      {Array.from({ length: size}, (_, i) => i + 1).map((step) => {
        return <div data-isActive={step <= active} />
      })}
    </ProgressIndicatorContainer>
  )
}