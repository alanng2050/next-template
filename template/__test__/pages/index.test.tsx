import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import Home from '@/pages/index'
import { store } from '@/models'

describe('Home', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }

  it('should render correctly', () => {
    const { asFragment } = render(<Home />, { wrapper: Wrapper })

    expect(asFragment()).toMatchSnapshot()
  })

  it('should see the text Bee', () => {
    render(<Home />, { wrapper: Wrapper })
    expect(screen.getByText('This is Bee')).toBeInTheDocument()
  })
})
