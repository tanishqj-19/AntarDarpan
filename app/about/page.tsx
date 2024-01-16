import Nav from "@/components/Nav"

export default function AboutPage() {
    return (
    <div>
      <Nav link={'/new-user'}/>
    
      <div className="px-6 lg:w-5/6 xl:w-4/6 py-10 mx-auto">
        <div className="space-y-12 text-md md:text-lg text-gray-500 pb-4 md:pb-8">
          
          <h2 className="text-4xl font-bold leading-[1.15] 
                bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Mind Gauge: Unleashing the Power of AI for Personal Insight
            </h2>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-[1.15] 
                bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Mission
            </h2>
            <p className="text-gray-800">
            At Mind Gauge, our mission is to empower individuals to gain deeper insights into their emotional well-being through the lens of AI-driven analysis.
            We understand the power of self-reflection and believe that leveraging the capabilities of large language models can enhance this process, 
            providing you with a comprehensive historical analysis of your mood based on your journal entries.
            </p>
          </div>
  
          <div className="space-y-2">
            
            <h2 className="text-3xl font-bold leading-[1.15] 
                bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Historical Mood Tracking:
            </h2>
            <p  className="text-gray-800">
            With Mind Gauge, you can effortlessly track your emotional journey through the historical mood tracking feature.
            Visualize how your mood has evolved, identify triggers, and make informed decisions for a happier, healthier life.
            </p>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-[1.15] 
                bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Secure and Private:
            </h2>
            <p  className="text-gray-800">
            Your privacy is our top priority. 
            Mind Gauge employs robust security measures to ensure that your journal entries remain confidential.
            Feel free to express yourself without any concerns about the safety of your personal thoughts and emotions.
            </p>
          </div>
  
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-[1.15] 
                bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              User-Friendly Interface:
            </h2>
            <p  className="text-gray-800">
            We believe that technology should be accessible to everyone.
            Mind Gauge boasts an intuitive and user-friendly interface, 
            making it easy for you to navigate and derive meaningful insights without any technical hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }