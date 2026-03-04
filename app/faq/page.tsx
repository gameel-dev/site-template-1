import Header from "@/components/site/Header";
import PageHero from "@/components/site/PageHero";
import FAQAccordion from "@/components/site/FAQAccordion";
import LeadFormSection from "@/components/site/LeadFormSection";
import Footer from "@/components/site/Footer";

export const metadata = {
  title: "FAQ | We Buy Houses | EBS",
  description:
    "Frequently asked questions about selling your house for cash. No fees, no commission, no repairs. Get answers from EBS.",
};

const BULLETS_WHAT_WE_DO = [
  "Fix them up to sell",
  "Fix them up to rent",
  "Help people that can't qualify for a loan, such as business owners, to own a home",
  "Short-term rentals",
];

const FAQ_ITEMS = [
  {
    question: "How long will it be until I get an offer?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          We strive to get an offer to you as quickly as possible. But at the same time, we want to make an offer based on your property's current condition and your situation. Because of that, we typically don't make an offer until we've had a chance to meet with you and view the house. And trust us – it's better this way! That way, we can give you a confident offer based on reality.
        </p>
        <p>
          Here's how our typical process works. We'll first have a phone conversation with you to see if we will be a good fit for each other. Then, we'll set an appointment whenever you're free to meet with you at the house. After that, we'll put an offer together for you. We typically have your offer ready within hours of meeting with you or at least by the following day.
        </p>
      </div>
    ),
  },
  {
    question: "How long will it be until closing?",
    content: (
      <p className="leading-relaxed">
        Since we're not buying your house to live in, we can work on your timeline. Need a few months to get moved to your new place? We can handle that! On the flip side, if you need to close very quickly for some reason, you've come to the right place! We have the means to close in 7-10 days if need be.
      </p>
    ),
  },
  {
    question: "Will I have to make repairs?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          This is one of the biggest benefits of working with us. We will never ask you to make repairs when you sell your house to us. Compare that to a retail buyer that knit-picks every detail of your home and comes to you with a long list of repairs.
        </p>
        <p>
          Depending on the age and condition of the home, we might hire a home inspector for due diligence. However, this is only for our reference so that we know what we need to repair. You can be confident that you will not have to make a single repair when working with us.
        </p>
      </div>
    ),
  },
  {
    question: "What will I have to do?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          Absolutely nothing! Instead of having to pander to prospective buyers, you get to relax and wait for closing day. If you're living in the property, you will need to coordinate moving your belongings, but we can even help you with that if you'd like!
        </p>
        <p>
          On top of that, we will handle all the paperwork and coordination to get to the closing table. We have a great team, including a fantastic title company, that will make the sales process extremely smooth for you. When we say we're a full-service real estate company, we mean it!
        </p>
      </div>
    ),
  },
  {
    question: "What do you do with the houses you buy?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          That depends on the location, condition, and size of the house as well as the deal we structure with you. But here are some of our most common uses for properties we buy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {BULLETS_WHAT_WE_DO.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "What are the benefits of a cash offer?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          The primary benefits of a cash offer on your house are convenience and simplicity. Transactions are way more complicated when a lender is involved because they often have special requirements that must be met. Not to mention that lenders won't approve a loan on properties that need significant repairs. A cash offer cuts out all of these requirements and gets you what you need, money in your pocket in the shortest time possible.
        </p>
        <p>
          The definition of a cash offer is an offer with no financing contingency. Nearly all traditional offers involving a lender include a contingency based on the buyer's ability to obtain financing. If they can't qualify, they are allowed to back out of the deal and receive their earnest money back. This happens quite a bit with retail buyers. But that is another thing you don't have to worry about when working with a cash buyer.
        </p>
      </div>
    ),
  },
  {
    question: "Do you pay a fair price for houses?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          We understand that if we don't make realistic offers, we'll never be able to buy houses. Therefore, we do everything we can to give you an offer that works for you. We work hard to control renovation expenses and keep our rehab budget low so that we can pass some of those savings on to you.
        </p>
        <p>
          Ultimately, we base our offers on the finished value of the property and how much it will cost to renovate it. If you'd like, we can share with you how we calculate your offer. And remember, you have no obligation to accept it! Even if we end up not being your buyer, we will share as much information with you as we can to educate you and help you pick the best path for your situation.
        </p>
      </div>
    ),
  },
  {
    question: "Do you charge any fees?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          We charge zero fees! When we make an offer on your property, the price you see is the price you will get at closing. Compare that to selling your house on the market. First, agent fees are typically 6% of the sales price. Also, closing costs can be several thousand dollars if the buyer asks you to pay them. Lastly, retail buyers often perform inspections and request a list of repairs which can cost thousands of dollars.
        </p>
        <p>
          You won't have to worry about any of these fees when you work with us. We don't charge agent fees, we pay your closing costs, and we won't ask you to fix anything. These perks alone can save you tens of thousands of dollars!
        </p>
      </div>
    ),
  },
  {
    question: "How much will you pay for my house?",
    content: (
      <div className="space-y-4 leading-relaxed">
        <p>
          We understand that this might be one of the top questions on your mind. Several factors go into each offer that we make on a house. The most important considerations are the location, size, condition, finishes, what nearby homes have sold for, and what we plan to do with the property.
        </p>
        <p>
          We take all of these things into account and work to calculate an offer that will work for you. We also consider your near-term plans and try to structure our offer to help you meet them!
        </p>
      </div>
    ),
  },
  {
    question: "How are you different from a real estate agent?",
    content: (
      <p className="leading-relaxed">
        Real estate agents specialize in listing properties on the MLS (Multiple Listing Service). Instead, we will actually be the ones buying your house! When you work with us, you won't have to worry if someone will make an offer on your house or not because we'll personally give you one. Also, you won't have to wonder who is buying your home because we're your buyers!
      </p>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="FAQ"
          description="Common questions about selling your house for cash."
        />

        <article className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </article>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
