import { Button, useToast } from '@apideck/components'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Image from 'next/image'

// Add the following line to import the type declarations
import type { ChatCompletionRequestMessage } from 'openai'

const IndexPage: NextPage = () => {
  const { addToast } = useToast()

  // Create a sample ChatCompletionRequestMessage object
  const message: ChatCompletionRequestMessage = {
    role: 'user',
    content: 'Hello, Rihan!'
  }

  // Log the message to the console
  console.log(message)

  return (
    <Layout title="Home | Next Starter Kit">
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="p-5 bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto -mt-10 rounded-full shadow-lg"
          />
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-xl font-semibold leading-6 text-gray-800">Next Starter Kit</h3>

            <p className="my-2 text-gray-500">
              Welcome to the{' '}
              <a className="font-semibold hover:text-primary-500" href="https://www.apideck.com">
                Apideck
              </a>{' '}
              boilerplate for building React applications with Next.js, TypeScript, and Tailwind
              CSS.
            </p>
            <Button
              onClick={() =>
                addToast({
                  title: 'Hello Rihan!',
                  description: (
                    <>
                      {`Let's start coding! Visit the component library documentation`}{' '}
                      <a
                        href="https://developers.apideck.com/components"
                        target={'_blank'}
                        rel="noreferrer"
                        className="text-primary-600 hover:text-primary-400"
                      >
                        here
                      </a>
                      .
                    </>
                  )
                })
              }
              text="Button"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
