const getToken = () => {
  const hash = window.location.hash
  const hashSplitted = hash?.split('&')?.[0]
  const expiration = hash?.split('&')?.[2]
  const token = hashSplitted?.split('=')?.[1]
  const tokenPersistedIn = expiration?.split('=')?.[1]
  const d = Date.now() + (tokenPersistedIn * 1000)
  if (token) localStorage.setItem('_act_', token)
  
  const isExpiredSet = localStorage.getItem('_act_exp_')
  if (!isExpiredSet) localStorage.setItem('_act_exp_', window.btoa(d))
  return token
}

export default getToken
