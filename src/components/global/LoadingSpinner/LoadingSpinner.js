import { Space, Spin } from "antd";
import { LoadingSpinnerWrapper } from "./LoadingSpinner.style";

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerWrapper>
      <Space size="middle">
        <Spin size="large" className="loading_spinner" />
      </Space>
    </LoadingSpinnerWrapper>
  );
}
