import { css } from '@emotion/react'

const Header = () => {
  return (
    <div css={wrap}>
      <p>aaaa</p>
    </div>
  )
}

const wrap = css`
  background: red;
  width: 100%;
  height: 100px;
`

export default Header
