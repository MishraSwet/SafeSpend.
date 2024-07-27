interface Settingform{
    label: string,
}
export default function Settings() {
    return <div>
        Settings Page
    </div>
}

export function SettingsForm({label}:Settingform) {
    return <div>
        <label htmlFor="">{label}</label>
        <input type="text" />
    </div>
}