import { createContext,useState } from "react";


export const InterviewContext = createContext()

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null)
    const [reports, setReports] = useState([]) //multiple reports

    return (
        // Every component inside this InterviewProvider can access these values
        <InterviewContext.Provider value={{ loading, setLoading, report, setReport, reports, setReports }}>
            {children}
        </InterviewContext.Provider>
    )
}