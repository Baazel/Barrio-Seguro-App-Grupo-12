import { WebPlugin } from '@capacitor/core';
import type { BarcodeScannerPlugin, IsGoogleBarcodeScannerModuleAvailableResult, IsSupportedResult, IsTorchAvailableResult, IsTorchEnabledResult, PermissionStatus, ReadBarcodesFromImageOptions, ReadBarcodesFromImageResult, ScanResult, StartScanOptions } from './definitions';
export declare class BarcodeScannerWeb extends WebPlugin implements BarcodeScannerPlugin {
    startScan(_options?: StartScanOptions): Promise<void>;
    stopScan(): Promise<void>;
    readBarcodesFromImage(_options: ReadBarcodesFromImageOptions): Promise<ReadBarcodesFromImageResult>;
    scan(): Promise<ScanResult>;
    isSupported(): Promise<IsSupportedResult>;
    enableTorch(): Promise<void>;
    disableTorch(): Promise<void>;
    toggleTorch(): Promise<void>;
    isTorchEnabled(): Promise<IsTorchEnabledResult>;
    isTorchAvailable(): Promise<IsTorchAvailableResult>;
    openSettings(): Promise<void>;
    isGoogleBarcodeScannerModuleAvailable(): Promise<IsGoogleBarcodeScannerModuleAvailableResult>;
    installGoogleBarcodeScannerModule(): Promise<void>;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    private createUnavailableException;
}
