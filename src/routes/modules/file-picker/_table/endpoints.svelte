<script>
    import {sectioning} from '$lib/index';
</script>
<table class="table-auto w-full text-sm text-left">
    <thead class="text-xs uppercase">
        <tr>
        <th class="p-3 border">Name</th>
        <th class="p-3 border">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-3 border font-mono"><a href={`#${sectioning.file_picker.backend.loading_media}`} class="note">$fileInputStore.serverGetUrl</a></td>
            <td class="p-3 border font-mono">Load Media</td>
        </tr>
        <tr>
            <td class="p-3 border font-mono"><a href={`#${sectioning.file_picker.backend.uploading_to_storage}`} class="note">$fileInputStore.serverUploadUrl</a></td>
            <td class="p-3 border font-mono">Upload to storage</td>
        </tr>
        <tr>
            <td class="p-3 border font-mono"><a href={`#${sectioning.file_picker.backend.deleting_from_storage}`} class="note">$fileInputStore.serverDeleteUrl</a></td>
            <td class="p-3 border font-mono">Delete from storage</td>
        </tr>
        <tr>
            <td class="p-3 border font-mono"><a href={`#${sectioning.file_picker.backend.storage_information}`} class="note">$fileInputStore.serverStorageUrl</a></td>
            <td class="p-3 border font-mono">Storage information</td>
        </tr>
        <tr>
            <td class="p-3 border font-mono"><a href={`#${sectioning.file_picker.backend.downloading_from_storage}`} class="note">$fileInputStore.serverDownloadUrl</a></td>
            <td class="p-3 border font-mono">Download from storage</td>
        </tr>
    </tbody>
</table>