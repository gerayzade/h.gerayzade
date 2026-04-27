export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const dummyAPI = async (data: any = null) => {
  await sleep(500)
  // eslint-disable-next-line no-console
  console.log('dummyAPI: ', data)
  return {
    data,
    error: null,
  }
}
