import React from 'react';

interface ConversationStarterProps {
  campaignName: string;
  template: string[];
  variables: {
    name: string;
    value: string;
  }[];
}

// TODO: Come back to this
const ConversationStarter = ({
  campaignName,
  template,
  variables,
}: ConversationStarterProps) => (
  <button
    className="bg-background rounded-md shadow-card flex flex-col gap-2 p-4 text-left"
    onClick={() => console.log('TODO')}
  >
    <div>
      {template.map((el) =>
        el.match(/{{[A-Za-z]*}}/) ? (
          <span>
            {
              variables.find(
                (variable) =>
                  variable.name === el.replace(/{{([A-Za-z]*)}}/, '$1')
              )?.value
            }
          </span>
        ) : (
          <span>{el}</span>
        )
      )}
    </div>
    <div className="text-main-l2 text-14 font-semibold">{campaignName}</div>
  </button>
);

export default ConversationStarter;
