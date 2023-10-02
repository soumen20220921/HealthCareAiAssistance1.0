import React from "react";
import styled from "styled-components";

const AIAssistantSection = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <HeaderQuestion>Can an AI Assistant Help Clinicians in Diagnosis?</HeaderQuestion>
        </Header>
        <SectionHeader>Unlocking Efficiency in Healthcare</SectionHeader>
        <SectionDescription>
          Our AI-powered healthcare assistant is revolutionizing the way
          clinicians work. Here's how it can benefit you:
        </SectionDescription>
        <SubsectionHeader>1. Time Savings</SubsectionHeader>
        <TimeSavingsDescription>
          Our AI assistant significantly reduces consultation time, allowing
          clinicians to see more patients in less time. This means shorter
          waiting times for patients and higher efficiency for clinicians.
        </TimeSavingsDescription>

        <ImageContainer>
          {/* Increase the width and height of the first image */}
          <Image
            src="./images/working.png"
            alt="AI vs. Doctor"
            width="800"
            height="600"
          />
        </ImageContainer>
        <SubsectionHeader>Time Savings for Different Patients</SubsectionHeader>
        <TimeSavingsDescription>
          Our AI assistant significantly reduces consultation time for various
          patient types. See the chart below for details:
        </TimeSavingsDescription>

        <BarChartContainer>
          {/* Insert your time savings chart image here */}
          <BarChart
            src="./images/chart.png"
            alt="Time Savings Chart"
          />
        </BarChartContainer>
        <SubsectionHeader>We have asked certain question to doctors having varying experiences</SubsectionHeader>
        <TimeSavingsDescription>
        Their experiences
        </TimeSavingsDescription>

        <BarChartContainer>
          {/* Insert your time savings chart image here */}
          <BarChart
            src="./images/exp.png"
            alt="Time Savings Chart"
          />
        </BarChartContainer>
        <TimeSavingsDescription>
        First question
        </TimeSavingsDescription>

        <BarChartContainer>
          {/* Insert your time savings chart image here */}
          <BarChart
            src="./images/first-question.png"
            alt="Time Savings Chart"
          />
        </BarChartContainer>
        
        <TimeSavingsDescription>
        Second question
        </TimeSavingsDescription>

        <BarChartContainer>
          {/* Insert your time savings chart image here */}
          <BarChart
            src="./images/second-image.png"
            alt="Time Savings Chart"
          />
        </BarChartContainer>
        
        <TimeSavingsDescription>
        Third question
        </TimeSavingsDescription>

        <BarChartContainer>
          {/* Insert your time savings chart image here */}
          <BarChart
            src="./images/third-image.png"
            alt="Time Savings Chart"
          />
        </BarChartContainer>

        


        


        <SectionFooter>
          Explore how our AI assistant can transform healthcare and improve
          patient outcomes.
        </SectionFooter>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 40px 0;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 20px;
`;

const HeaderQuestion = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const SectionHeader = styled.h2`
  font-size: 28px;
  color: #333;
  margin-top: 40px;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto; /* Maintain aspect ratio */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SubsectionHeader = styled.h3`
  font-size: 24px;
  color: #333;
  margin: 40px 0 20px;
`;

const TimeSavingsDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`;

// const AccuracyDescription = styled.p`
//   font-size: 16px;
//   color: #666;
//   margin-bottom: 40px;
// `;

const BarChartContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;

const BarChart = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto; /* Maintain aspect ratio */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionFooter = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 40px;
`;

export default AIAssistantSection;
