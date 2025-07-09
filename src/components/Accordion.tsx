import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="accordion-custom">
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            className="btn w-100 d-flex justify-content-between align-items-center py-3 border-0 bg-transparent text-start"
            onClick={() => toggleItem(item.id)}
          >
            <h5 className="mb-0 text-card-foreground fw-semibold">
              #{index + 1} {item.question}
            </h5>
            <ChevronDown 
              size={20} 
              className={`text-muted transition-all ${openItems.has(item.id) ? 'rotate-180' : ''}`}
              style={{ 
                transform: openItems.has(item.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              maxHeight: openItems.has(item.id) ? '200px' : '0px',
              transition: 'max-height 0.3s ease-in-out'
            }}
          >
            <div className="pb-3">
              <p className="text-muted-foreground mb-0">{item.answer}</p>
            </div>
          </div>
          
          {index < items.length - 1 && <div className="divider my-4"></div>}
        </div>
      ))}
    </div>
  );
};