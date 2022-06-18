import {
  LoginContainer,
  LoginButton,
  Title,
  LoginText,
} from './LoginStyles'

export default function Login() {
  return (
    <LoginContainer>
      <Title>Rapotify</Title>
      <LoginText>Ringkasan spotify kamu selama semester 1 2022. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</LoginText>
      <LoginButton href="https://accounts.spotify.com/en/authorize?client_id=c4715ca7079848e3b737f417eb5a2e33&redirect_uri=http://localhost:3000/redirect&scope=user-top-read%20user-read-currently-playing%20user-read-playback-state%20user-read-recently-played&response_type=token&show_dialog=true">
        Login Spotify
      </LoginButton>
    </LoginContainer>
  )
}