import React from 'react'

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children, maxChars = 100}: Props ) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  if (children.length <= maxChars) return <p>{children}</p> 
  
  // to summarize the text
  // here if the text is less than the maxChars then we return the text
  const text = isExpanded ? children: children.substring(0, maxChars) + '...';
  // !isExpanded is negation of current value of isExpanded, means `if isExpanded is true then it will be false and vice versa`
  return <p>{text}<button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Show less' : 'Show more'}</button></p>
}

export default ExpandableText
