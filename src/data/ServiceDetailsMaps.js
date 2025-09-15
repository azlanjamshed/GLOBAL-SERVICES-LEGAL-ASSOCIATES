import { LicenseService } from "./LicenseService"
import { LegalService } from "./LegalService"
import { CitizenService } from "./CitizenService"
import { OtherService } from "./OtherService"
import { RegistrationService } from "./RegistrationService"

export const ServiceDetailsMaps = {
    license: LicenseService,
    legal: LegalService,
    citizen: CitizenService,
    other: OtherService,
    registration: RegistrationService



};