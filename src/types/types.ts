// �������� ������
export interface Product {
    id: string;             // ���������� ������������� ������
    name: string;           // �������� ������
    description: string;    // �������� ������
    price: number;          // ���� ������
    available: boolean;     // ����������� ������ �� ������
}

// ������� �������
export interface CartItem {
    product: Product;       // ������ ������
    quantity: number;       // ���������� ������ ������
    totalPrice: number;     // ����� ��������� �������
}

// ������� ������������
export interface Cart {
    items: CartItem[];      // ������ ������� � �������
    totalQuantity: number;  // ����� ���������� ������� � �������
    totalPrice: number;     // ����� ��������� ������� � �������
}

// ����� ������������
export interface Order {
    id: string;             // ���������� ������������� ������
    items: CartItem[];      // ������ ������� � ������
    address: string;        // ����� ��������
    paymentMethod: PaymentMethod; // ������ ������
    totalPrice: number;     // ����� ��������� ������
}

// ������������
export interface User {
    id: string;             // ���������� ������������� ������������
    email: string;          // ����������� ����� ������������
    phone: string;          // ������� ������������
    address: string;        // ����� �������� �� ���������
}

// ������������� ������
export interface OrderConfirmation {
    orderId: string;        // ������������� ��������������� ������
    message: string;        // ��������� �������������
    status: string;         // ������ ������������� ������
}

// ������
export interface Error {
    code: number;           // ��� ������
    message: string;        // ��������� ������
}

// ��������� ����
export interface Modal {
    isOpen: boolean;        // ������� �� ��������� ����
    content: string | null; // ������� ���������� ����
    onClose: () => void;    // ������� ��� �������� ����
}

// ������� ������
export enum PaymentMethod {
    CASH = "CASH",          // ������ ���������
    CARD = "CARD",          // ������ ������
    ONLINE = "ONLINE"       // ������-������
}