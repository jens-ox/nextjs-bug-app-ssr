import simpleGit from 'simple-git'

const git = simpleGit()

export const getCurrentCommit = async (url: string) => {
  const line = await git.listRemote([url, 'HEAD'])
  return line.replace(/\t+HEAD\n$/, '')
}
