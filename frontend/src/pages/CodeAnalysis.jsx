import React, { useState } from 'react';
import '../styles/Pages.css';

const CodeAnalysis = () => {
  const [analyses] = useState([
    { id: 1, repo: 'E-Commerce Platform', issues: 12, quality: '85%', lastAnalyzed: '2026-03-19' },
    { id: 2, repo: 'Microservices API', issues: 5, quality: '92%', lastAnalyzed: '2026-03-18' },
    { id: 3, repo: 'Cloud Billing System', issues: 8, quality: '88%', lastAnalyzed: '2026-03-17' },
  ]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🔍 Code Analysis</h1>
        <p>Analyze and optimize your code quality</p>
      </div>

      <div className="analysis-table">
        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Issues Found</th>
              <th>Code Quality</th>
              <th>Last Analyzed</th>
            </tr>
          </thead>
          <tbody>
            {analyses.map((analysis) => (
              <tr key={analysis.id}>
                <td>{analysis.repo}</td>
                <td><span className="badge warning">{analysis.issues}</span></td>
                <td><span className="badge success">{analysis.quality}</span></td>
                <td>{new Date(analysis.lastAnalyzed).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CodeAnalysis;
