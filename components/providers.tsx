import { Provider } from 'jotai'

export function MyProviders({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}