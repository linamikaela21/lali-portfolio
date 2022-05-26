import { render, screen } from '@testing-library/react';
import { CustomInput } from '..';

const MockValues = {
  fake: '',
};
const MockErrors = {
  fake: '',
};
const MockHandleChange = jest.fn();
const MockOnBlur = jest.fn();

describe('CustomInput', () => {
  beforeEach(() => {
    render(
      <CustomInput
        label="Fake text"
        type="text"
        name="fake"
        value={MockValues.fake}
        placeholder="Fake text"
        handleInputChange={MockHandleChange}
        errors={MockErrors.fake}
        onBlur={MockOnBlur}
        disabled={false}
        isRequired={false}
      />
    );
  });

  it('should render a FormGroup container', () => {
    const formGroup = screen.getByTestId('test-id-form-group-container');
    expect(formGroup).toBeInTheDocument();
  });

  it('should render a Label', () => {
    const label = screen.getByTestId('test-id-form-label');
    expect(label).toBeInTheDocument();
  });

  it('should render a Label without asterisk', () => {
    const label = screen.queryAllByTestId('test-id-label-with-asterisk');
    expect(label.length).toBe(0);
  });

  it('should render a Label with asterisk', () => {
    render(
      <CustomInput
        label="Fake text *"
        type="text"
        name="fake"
        value={MockValues.fake}
        placeholder="Fake text"
        handleInputChange={MockHandleChange}
        errors={MockErrors.fake}
        onBlur={MockOnBlur}
        disabled={false}
        isRequired={true}
      />
    );

    const label = screen.getByTestId('test-id-label-with-asterisk');
    expect(label).toBeInTheDocument();
  });

  it('should render a FormControl', () => {
    const formControl = screen.getByTestId('test-id-form-control');
    expect(formControl).toBeInTheDocument();
  });

  it('should render a error', () => {
    render(
      <CustomInput
        label="Fake text"
        type="text"
        name="fake"
        value={MockValues.fake}
        placeholder="Fake text"
        handleInputChange={MockHandleChange}
        errors="fake-error"
        onBlur={MockOnBlur}
        disabled={false}
        isRequired={true}
      />
    );

    const formTextError = screen.getByTestId('test-id-error-text');
    expect(formTextError).toBeInTheDocument();
  });

  it('should not render a error', () => {
    const formTextError = screen.queryAllByTestId('test-id-error-text');
    expect(formTextError.length).toBe(0);
  });
});
