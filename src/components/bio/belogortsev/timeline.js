import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { useTranslation } from "react-i18next";

export function TimeLine(){

  const {t} = useTranslation();

  return(
    <div>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="1930-1941"
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
          style={{ color: '#e86971' }} //точки
        >
          <h3>{t("belogor-h1")}</h3>
          <p>{t("belogor-timedesc1")}
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="1941—1944"
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
          style={{ color: '#e86971' }}
        >
          <h3>{t("belogor-h2")}</h3>
          <p>{t("belogor-timedesc2")}
          </p>
        </TimelineItem>
        
        <TimelineItem
          key="004"
          dateText="1944—2021"
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
          style={{ color: '#e86971' }}
        >
          <h3>{t("belogor-h3")}</h3>
          <p>{t("belogor-timedesc3")}
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
