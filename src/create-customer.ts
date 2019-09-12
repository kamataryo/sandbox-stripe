import Stripe from 'stripe'
import { stripe } from './configure'

const main = async () => {
  const customerCreateOption: Stripe.customers.ICustomerCreationOptions = {
    email: 'mugil.cephalus@gmail.com',
    name: 'Kamata, Ryo',
    description: 'Test',
    source: 'tok_visa'
  }

  const customer = await stripe.customers.create(customerCreateOption)
  process.stdout.write(
    `The Stripe customer id for ${customer.email} is ${customer.id}.`
  )

  const createSubscriptionOption: Stripe.subscriptions.ISubscriptionCreationOptions = {
    customer: customer.id,
    plan: 'plan_FnIRqxLUf69uTR' // change here
  }
  const subscription = await stripe.subscriptions.create(
    createSubscriptionOption
  )
  console.log(subscription)
}

main()
