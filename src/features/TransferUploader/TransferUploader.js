import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import styled from "styled-components";

import Card from "components/Card";
import CircularLoader from "components/CircularLoader";
import Text from "components/Text";
import ActionButtons from "./ActionButtons";

const StatusText = styled(Text)`
  text-align: center;
  color: var(--colors-woodSmoke);
`;

const InfoText = styled(Text)`
  text-align: center;
  color: var(--colors-abbey);
  margin-top: 4px;
`;

const TransferUploader = () => {
  const [progress, setProgress] = useState(0);
  const [isTransfering, setIsTransfering] = useState(false);
  const intervalRef = useRef();

  const startLoader = useCallback(() => {
    setIsTransfering(true);

    intervalRef.current = setInterval(() => {
      setProgress((previous) => previous + 1);
    }, 500);
  }, []);

  const stopLoader = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setProgress(0);
    setIsTransfering(false);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      clearInterval(intervalRef.current);
    }
  }, [progress]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const isLoaderActive = useMemo(() => progress !== 0, [progress]);

  return (
    <Card
      content={
        <>
          <CircularLoader radius={85} stroke={10} progress={progress} />
          {isTransfering && (
            <>
              <StatusText size="h2" as="h2">
                Transferring...
              </StatusText>
              <InfoText size="bodyCaption" as="p">
                ...Transfer related info...
              </InfoText>
            </>
          )}
        </>
      }
      actions={
        <ActionButtons
          isLoaderActive={isLoaderActive}
          stopLoader={stopLoader}
          startLoader={startLoader}
        />
      }
    />
  );
};

export default TransferUploader;
