<script lang="ts">
    export let name: string;

</script>

<div class="h-16 flex flex-nowrap overflow-hidden justify-start items-center text-slate-800 dark:text-slate-50" on:click on:focus>
    <div class="w-16 flex justify-center items-center">
        <slot name="icon"></slot>
    </div>
    <div class="text-2xl ml-2">
        {name}
    </div>
</div>