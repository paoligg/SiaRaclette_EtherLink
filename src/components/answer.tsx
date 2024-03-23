import { surveysContract } from "@/contracts";
import { useReadContract, useWriteContract } from "wagmi";
import React from 'react';

interface AnswerProps {
    index: number;
}

    const parseSurveyData = (data: string): Record<string, string[]> => {
    const questionsDict: Record<string, string[]> = {};
    const items = data.split(';');

    items.forEach(item => {
        const [question, answers] = item.split('@');
        questionsDict[question] = answers.split('|');
    });

    return questionsDict;
    };

const Answer = (props: AnswerProps) => {

    const { data: survey } = useReadContract({...surveysContract, functionName: "surveys", args: [BigInt(props.index)]});
    if (survey === undefined) {
        return <div>Loading...</div>;
    }
    else {
        const surveyData= survey[4];
        const surveyQuestions = parseSurveyData(surveyData);

        return (
            <div>
                <div>Questions du sondage {props.index + 1}</div>
                <div>Entreprise : {survey[7]}</div>
                <div>Reward : {Number(survey[2])}xtz</div>
                {Object.entries(surveyQuestions).map(([question, answers], index) => (
                <div key={index}>
                    <br></br>
                    <h2>{question}</h2>
                </div>
                ))}
            </div>
        );
    }
};

export default Answer;