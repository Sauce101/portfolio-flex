import { useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import createPersistedState from 'use-persisted-state'

const useColorSchemeState = createPersistedState('colorScheme')

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  )

  const [daytime, setDaytime] = useColorSchemeState()
  const value = useMemo(
    () => (daytime === undefined ? !!systemPrefersDark : daytime),
    [daytime, systemPrefersDark]
  )

  // useEffect(() => {
  //   if (value) {
  //     document.body.classList.add('dark')
  //   } else {
  //     document.body.classList.remove('dark')
  //   }
  // }, [value])

  return {
    daytime: value,
    setDaytime,
  }
}
