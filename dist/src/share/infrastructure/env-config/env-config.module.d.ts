import { DynamicModule } from '@nestjs/common';
import { ConfigModuleOptions } from '@nestjs/config';
export declare class EnvConfigModule {
    static forRoot(options?: ConfigModuleOptions): DynamicModule;
}
