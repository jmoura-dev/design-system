import { keyframes } from '@stitches/react'
import { styled } from '../../styles'
import * as ToastTags from '@radix-ui/react-toast'

const viewportPadding = 35

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 35px))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100% + var(--viewportPadding)))' },
})

export const ToastRoot = styled(ToastTags.Root, {
  padding: '$3 $4',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  position: 'relative',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': { animation: `${hide} 100ms ease-in` },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': { animation: `${swipeOut} 100ms ease-out` },
  },
})

export const ToastTitle = styled(ToastTags.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(ToastTags.Description, {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
  marginTop: '$1',
})

export const ToastClose = styled(ToastTags.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(ToastTags.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: viewportPadding,

  position: 'fixed',
  bottom: 0,
  right: 0,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 999,
  outline: 'none',
})
