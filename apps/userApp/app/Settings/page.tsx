interface Settingform{
    label: string,
}
export default function Settings() {
    return <div className="flex flex-col items-center justify-center">
        Settings Page
    </div>
}

export function SettingsForm({label}:Settingform) {
    return <div>
        <label htmlFor="">{label}</label>
        <input type="text" />
    </div>
}