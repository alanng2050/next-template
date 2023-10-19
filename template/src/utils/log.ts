export const log = (...all: any) => {
  if (process.env.NODE_ENV !== 'production')
    console.log('From logger: ', ...all)
}
