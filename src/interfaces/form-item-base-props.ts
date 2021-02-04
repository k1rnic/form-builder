export interface IFormItemBaseProps {
  value?: any;
  onValueChange?: (name: string, value: any) => void;
  onValueReset?: (name: string) => void;
}
